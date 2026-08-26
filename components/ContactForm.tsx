'use client';

import { ChevronDown } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { contactDetails } from '../app/site-config';
import { contactServiceOptions } from '../data/practice-areas';

type FieldErrors = {
  nome?: string;
  email?: string;
  atendimento?: string;
  mensagem?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [service, setService] = useState('');
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const servicePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeServiceMenu = (event: PointerEvent) => {
      if (!servicePickerRef.current?.contains(event.target as Node)) setServiceMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeServiceMenu);
    return () => document.removeEventListener('pointerdown', closeServiceMenu);
  }, []);

  const clearError = (field: keyof FieldErrors) => {
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nomeValue = String(formData.get('nome') ?? '').trim();
    const emailValue = String(formData.get('email') ?? '').trim();
    const mensagemValue = message.trim();

    const nextErrors: FieldErrors = {};
    if (!nomeValue) nextErrors.nome = 'Por favor, informe seu nome completo.';
    else if (nomeValue.length < 3) nextErrors.nome = 'O nome deve ter pelo menos 3 caracteres.';

    if (!emailValue || !emailPattern.test(emailValue)) nextErrors.email = 'Por favor, informe um e-mail válido.';

    if (!service) nextErrors.atendimento = 'Selecione o tipo de atendimento para continuar.';

    if (!mensagemValue) nextErrors.mensagem = 'Por favor, conte brevemente como podemos ajudar.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const whatsappMessage = [
      'Olá, Dra. Bruna! Vim pelo site e gostaria de conversar.',
      '',
      '*Nome:* ' + nomeValue,
      '*E-mail:* ' + emailValue,
      '*Atendimento:* ' + service,
      '*Mensagem:* ' + mensagemValue,
    ].join('\n');

    window.open(`https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const fieldBorder = (hasError?: string) => hasError ? 'border-[#b54c44]' : 'border-[#0A0A0A59] hover:border-[#D1AD7D] focus:border-[#D1AD7D]';

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <label className="text-[11px] font-medium tracking-[1px] text-[#0A0A0A]">
        Nome completo
        <input className={`mt-2 block w-full border-0 border-b bg-transparent py-3.25 text-[15px] outline-none transition ${fieldBorder(errors.nome)}`} type="text" name="nome" maxLength={80} autoComplete="name" placeholder="Como podemos te chamar?" onInput={() => clearError('nome')} />
        {errors.nome && <span className="mt-2 block text-[11px] font-medium tracking-normal text-[#b54c44]">{errors.nome}</span>}
      </label>
      <label className="text-[11px] font-medium tracking-[1px] text-[#0A0A0A]">
        Seu e-mail
        <input className={`mt-2 block w-full border-0 border-b bg-transparent py-3.25 text-[15px] outline-none transition ${fieldBorder(errors.email)}`} type="email" name="email" maxLength={120} autoComplete="email" placeholder="voce@email.com" onInput={() => clearError('email')} />
        {errors.email && <span className="mt-2 block text-[11px] font-medium tracking-normal text-[#b54c44]">{errors.email}</span>}
      </label>
      <div ref={servicePickerRef} className="relative text-[11px] font-medium tracking-[1px] text-[#0A0A0A]">
        <span>Qual atendimento você procura?</span>
        <input type="hidden" name="atendimento" value={service} />
        <button type="button" aria-haspopup="listbox" aria-expanded={serviceMenuOpen} className={`mt-2 flex w-full cursor-pointer items-center justify-between border-0 border-b bg-transparent px-0 py-3.25 text-left text-[15px] font-normal tracking-normal outline-none transition ${fieldBorder(errors.atendimento)}`} onClick={() => setServiceMenuOpen((open) => !open)}>
          <span className={service ? 'text-[#0A0A0A]' : 'text-[#65706D]'}>{service || 'Selecione uma opção'}</span>
          <ChevronDown size={18} className={`shrink-0 text-[#0A0A0A] transition-transform ${serviceMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        <div role="listbox" aria-label="Tipo de atendimento" aria-hidden={!serviceMenuOpen} className={`absolute z-20 mt-2 w-full origin-top overflow-hidden rounded-lg border border-[#D1AD7D] bg-[#fffdf9] p-1.5 shadow-[0_14px_28px_rgba(10,10,10,.14)] transition-[opacity,transform] duration-200 ease-out ${serviceMenuOpen ? 'translate-y-0 scale-y-100 opacity-100' : '-translate-y-1 scale-y-95 opacity-0 pointer-events-none'}`}>
          {contactServiceOptions.map((option) => (
            <button key={option} type="button" role="option" aria-selected={service === option} className={`flex w-full cursor-pointer rounded-md px-3 py-3 text-left text-[14px] font-medium tracking-normal transition ${service === option ? 'bg-[#0A0A0A] text-white' : 'text-[#0A0A0A] hover:bg-[#E0C8A073]'}`} onClick={() => { setService(option); clearError('atendimento'); setServiceMenuOpen(false); }}>
              {option}
            </button>
          ))}
        </div>
        {errors.atendimento && <span className="mt-2 block text-[11px] font-medium tracking-normal text-[#b54c44]">{errors.atendimento}</span>}
      </div>
      <label className="text-[11px] font-medium tracking-[1px] text-[#0A0A0A]">
        Como podemos ajudar?
        <textarea className={`mt-2 block h-29.5 w-full resize-none border-0 border-b bg-transparent py-3.25 text-[15px] outline-none transition ${fieldBorder(errors.mensagem)}`} name="mensagem" rows={3} maxLength={500} value={message} placeholder="Conte brevemente sobre sua necessidade." onChange={(event) => { setMessage(event.target.value); clearError('mensagem'); }} />
        <span className="mt-1.75 block text-right text-[10px] font-medium tracking-[.2px] text-[#65706D]">{message.length}/500 caracteres</span>
        {errors.mensagem && <span className="-mt-1 block text-[11px] font-medium tracking-normal text-[#b54c44]">{errors.mensagem}</span>}
      </label>
      <button className="self-start cursor-pointer rounded-lg bg-[#0A0A0A] px-5.25 py-3.75 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2A2318] disabled:cursor-default" type="submit" disabled={sent}>{sent ? 'Mensagem enviada ✓' : <>Enviar mensagem <span className="ml-5">→</span></>}</button>
      <p className={`${sent ? 'animate-[fade-quote_.35s_ease] block' : 'hidden'} m-0 border-l-[3px] border-[#D1AD7D] bg-[#F3F3F3a6] px-3.75 py-3.25 text-[13px] font-medium leading-normal text-[#0A0A0A]`} role="status">O WhatsApp foi aberto com sua mensagem preenchida. Basta conferir e enviar.</p>
    </form>
  );
}
