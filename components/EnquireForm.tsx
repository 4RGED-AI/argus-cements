"use client";

import { useRef, useState, type FormEvent } from "react";
import { enquire, enquireTypes } from "@/data/enquire";

/**
 * Front-end only enquiry form for /enquire. Nothing is sent anywhere: on a
 * valid submit it simply swaps to a thank-you message. Classes use eq-.
 */
type Field = "name" | "company" | "email" | "phone" | "type" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const empty: Values = { name: "", company: "", email: "", phone: "", type: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[+()\d\s-]{6,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.type) e.type = "Please choose an enquiry type.";
  if (!v.message.trim()) e.message = "Please tell us a little about your enquiry.";
  return e;
}

export default function EnquireForm() {
  const { form } = enquire;
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLDivElement>(null);

  const set = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      const el = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
      return;
    }
    setSent(true);
    requestAnimationFrame(() => thanksRef.current?.focus());
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="eq-thanks" ref={thanksRef} tabIndex={-1} role="status" aria-live="polite">
        <span className="eq-thanks_mark" aria-hidden="true" />
        <h3 className="h3 eq-h">{form.thanks.title}{values.name.trim() ? `, ${values.name.trim().split(" ")[0]}` : ""}</h3>
        <p className="t-body eq-body">{form.thanks.body}</p>
        <button type="button" className="eq-link layout-title_sm" onClick={reset}>
          {form.thanks.again}
        </button>
      </div>
    );
  }

  const text = (field: Field, label: string, opts: { type?: string; required?: boolean; auto?: string } = {}) => (
    <div className={`eq-field${errors[field] ? " is-error" : ""}`}>
      <label className="eq-label layout-title_sm" htmlFor={`eq-${field}`}>
        {label}
        {opts.required ? <span className="eq-req" aria-hidden="true"> *</span> : <span className="eq-opt"> (optional)</span>}
      </label>
      <input
        id={`eq-${field}`}
        name={field}
        type={opts.type ?? "text"}
        autoComplete={opts.auto}
        className="eq-input t-body"
        value={values[field]}
        onChange={(e) => set(field, e.target.value)}
        aria-required={opts.required || undefined}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={errors[field] ? `eq-${field}-err` : undefined}
      />
      {errors[field] && (
        <p className="eq-error t-body_sm" id={`eq-${field}-err`}>
          {errors[field]}
        </p>
      )}
    </div>
  );

  return (
    <form className="eq-form" ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="eq-row">
        {text("name", "Name", { required: true, auto: "name" })}
        {text("company", "Company", { auto: "organization" })}
      </div>
      <div className="eq-row">
        {text("email", "Email", { type: "email", required: true, auto: "email" })}
        {text("phone", "Phone", { type: "tel", auto: "tel" })}
      </div>

      <fieldset
        className={`eq-field eq-types${errors.type ? " is-error" : ""}`}
        aria-describedby={errors.type ? "eq-type-err" : undefined}
      >
        <legend className="eq-label layout-title_sm">
          Enquiry type<span className="eq-req" aria-hidden="true"> *</span>
        </legend>
        <div className="eq-chips">
          {enquireTypes.map((t) => (
            <label key={t} className={`eq-chip t-body${values.type === t ? " is-on" : ""}`}>
              <input
                type="radio"
                name="type"
                value={t}
                checked={values.type === t}
                onChange={() => set("type", t)}
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
        {errors.type && (
          <p className="eq-error t-body_sm" id="eq-type-err">
            {errors.type}
          </p>
        )}
      </fieldset>

      <div className={`eq-field${errors.message ? " is-error" : ""}`}>
        <label className="eq-label layout-title_sm" htmlFor="eq-message">
          Message<span className="eq-req" aria-hidden="true"> *</span>
        </label>
        <textarea
          id="eq-message"
          name="message"
          rows={6}
          className="eq-input eq-textarea t-body"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          aria-required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "eq-message-err" : undefined}
        />
        {errors.message && (
          <p className="eq-error t-body_sm" id="eq-message-err">
            {errors.message}
          </p>
        )}
      </div>

      <div className="eq-actions">
        <button type="submit" className="btn btn-large eq-submit">
          <span className="btn-inner">
            <span className="btn-text">{form.submit}</span>
          </span>
        </button>
        <p className="t-body_sm is-faded eq-note">{form.note}</p>
      </div>
    </form>
  );
}
