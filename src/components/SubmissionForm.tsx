import React, { useState } from "react";

const SubmissionForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", gender: "", meaning: "", origin: "", similar: "" });
  const [msg, setMsg] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.gender || !form.meaning || !form.origin) {
      setMsg("Bütün sahələri doldurun!");
      return;
    }
    // POST to serverless endpoint, example:
    fetch("/api/submit-name", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" }})
      .then(() => setMsg("Təklif göndərildi!"))
      .catch(() => setMsg("Xəta baş verdi"));
  };

  return (
    <form className="bg-white dark:bg-gray-800 p-4 rounded shadow" onSubmit={handleSubmit}>
      <h4 className="font-semibold mb-2">Yeni ad təklif edin</h4>
      <input className="w-full mb-2 p-2 border rounded" name="name" placeholder="Ad" value={form.name} onChange={handleChange} />
      <select className="w-full mb-2 p-2 border rounded" name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Cins</option>
        <option value="qız">Qız</option>
        <option value="oğlan">Oğlan</option>
      </select>
      <input className="w-full mb-2 p-2 border rounded" name="origin" placeholder="Mənşə" value={form.origin} onChange={handleChange} />
      <textarea className="w-full mb-2 p-2 border rounded" name="meaning" placeholder="Məna" value={form.meaning} onChange={handleChange} />
      <input className="w-full mb-2 p-2 border rounded" name="similar" placeholder="Oxşar adlar (vergüllə)" value={form.similar} onChange={handleChange} />
      <button className="bg-blue-600 text-white px-3 py-1 rounded" type="submit">Təklif et</button>
      {msg && <div className="mt-2 text-green-600">{msg}</div>}
    </form>
  );
};

export default SubmissionForm;