"use client";

import { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import Reveal from "./Reveal";
import Leaf from "./Leaf";

const MAX_CHARS = 500;

type ReviewDoc = {
  id: string;
  uid: string;
  name: string;
  photoURL: string;
  rating: number;
  text: string;
};

export default function ReviewSection() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [reviews, setReviews] = useState<ReviewDoc[]>([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setReviews(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ReviewDoc, "id">) }))
      );
    });
    return () => unsub();
  }, []);

  const myReview = user ? reviews.find((r) => r.id === user.uid) : null;

  useEffect(() => {
    if (myReview) {
      setRating(myReview.rating);
      setText(myReview.text);
    }
  }, [myReview?.id]);

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch {
      setError("No pudimos iniciar sesión. Probá de nuevo.");
    }
  };

  const handleLogout = () => signOut(auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!user) return;
    if (rating < 1) {
      setError("Elegí una puntuación de 1 a 5 estrellas.");
      return;
    }
    if (!text.trim()) {
      setError("Escribí un comentario antes de enviar.");
      return;
    }
    setSaving(true);
    try {
      await setDoc(doc(db, "reviews", user.uid), {
        uid: user.uid,
        name: user.displayName || "Usuario de Google",
        photoURL: user.photoURL || "",
        rating,
        text: text.trim().slice(0, MAX_CHARS),
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch {
      setError("No pudimos guardar tu reseña. Probá de nuevo.");
    } finally {
      setSaving(false);
    }
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
      : null;

  return (
    <section id="resenas" className="section bg-cream-d relative overflow-hidden">
      <div className="wrap-narrow relative text-center flex flex-col items-center">
        <Reveal>
          <Leaf size={38} className="text-olive mx-auto" />
          <p className="label mt-5">Tu opinión nos importa</p>
          <h1 className="font-display text-forest text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            ¿Cómo estuvo tu Sensoria?
          </h1>
          <p className="text-muted text-[1.05rem] max-w-[46ch] mt-4">
            Entrá con tu cuenta de Google y contanos qué te pareció.
          </p>
        </Reveal>

        {avgRating && (
          <Reveal delay={0.06}>
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="font-display text-forest text-[1.6rem]">{avgRating}</span>
              <Stars value={Math.round(Number(avgRating))} readOnly />
              <span className="text-muted text-[13px]">
                ({reviews.length} {reviews.length === 1 ? "reseña" : "reseñas"})
              </span>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <div className="mt-8 w-full max-w-md bg-cream rounded-2xl border border-olive/10 p-6 sm:p-7">
            {authLoading ? null : !user ? (
              <button
                onClick={handleLogin}
                className="w-full inline-flex items-center justify-center gap-2.5 font-grotesk text-[13px] tracking-[0.14em] uppercase bg-white border border-olive/20 text-ink px-7 py-3.5 rounded-full hover:shadow-md transition-shadow"
              >
                <GoogleIcon />
                Continuar con Google
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  {user.photoURL && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={user.photoURL}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full"
                    />
                  )}
                  <span className="flex-1 font-grotesk text-[13px] text-forest">
                    {user.displayName}
                  </span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="font-grotesk text-[11px] tracking-[0.1em] uppercase text-muted underline hover:text-forest"
                  >
                    Salir
                  </button>
                </div>

                <div className="flex justify-center py-1">
                  <Stars value={hoverRating || rating} onHover={setHoverRating} onSelect={setRating} />
                </div>

                <textarea
                  value={text}
                  maxLength={MAX_CHARS}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  placeholder="Contanos tu experiencia con Sensoria..."
                  className="w-full rounded-xl border border-olive/20 bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-olive resize-none"
                />
                <div className="text-right text-[11px] text-muted -mt-2">
                  {text.length}/{MAX_CHARS}
                </div>

                {error && <p className="text-[13px] text-red-700">{error}</p>}
                {sent && (
                  <p className="text-[13px] text-sage-d font-medium">¡Gracias por tu reseña!</p>
                )}

                <button
                  type="submit"
                  disabled={saving}
                  className="font-grotesk text-[13px] tracking-[0.14em] uppercase bg-forest text-cream px-7 py-3.5 rounded-full hover:bg-olive transition-colors disabled:opacity-60"
                >
                  {saving ? "Enviando..." : myReview ? "Actualizar reseña" : "Publicar reseña"}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {reviews.length > 0 && (
          <Reveal delay={0.18}>
            <div className="mt-10 w-full flex flex-col gap-4 text-left">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-cream rounded-2xl border border-olive/10 p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {r.photoURL && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.photoURL}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-grotesk text-[12px] text-forest">{r.name}</p>
                      <Stars value={r.rating} readOnly small />
                    </div>
                  </div>
                  <p className="text-[14px] text-ink leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Stars({
  value,
  onHover,
  onSelect,
  readOnly,
  small,
}: {
  value: number;
  onHover?: (n: number) => void;
  onSelect?: (n: number) => void;
  readOnly?: boolean;
  small?: boolean;
}) {
  const interactive = !readOnly;
  return (
    <div
      className={`flex gap-1 ${small ? "text-[13px]" : "text-[26px]"}`}
      onMouseLeave={interactive ? () => onHover?.(0) : undefined}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onMouseEnter={interactive ? () => onHover?.(n) : undefined}
          onClick={interactive ? () => onSelect?.(n) : undefined}
          className={`${interactive ? "cursor-pointer" : ""} ${
            n <= value ? "text-[#E4A94F]" : "text-sand"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.93v2.33A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.16.28-1.7V4.97H.93A9 9 0 0 0 0 9c0 1.45.35 2.83.93 4.03l3.02-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .93 4.97l3.02 2.33C4.66 5.17 6.65 3.58 9 3.58z"
      />
    </svg>
  );
}
