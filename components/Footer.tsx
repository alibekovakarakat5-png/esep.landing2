'use client';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-accent-green flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Esep</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                  Для бизнеса
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Налоговое сопровождение для платформенной экономики
              Казахстана. Закрываем обязательства налогового агента
              по Налоговому кодексу 2026 — одним сервисом.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-4">
              Продукт
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">9 сервисов</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Внедрение</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Безопасность</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-4">
              Контакт
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:enterprise@esepkz.com" className="hover:text-white transition-colors">enterprise@esepkz.com</a></li>
              <li><a href="https://esepkz.com" className="hover:text-white transition-colors">esepkz.com</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Запросить демо</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 ТОО «Ибрагимова К.М» · БИН 241040036923 · Все права защищены.
          </p>
          <p className="text-xs text-white/30">
            Соответствие Закону РК № 214-VIII от 18.07.2025 (НК 2026)
          </p>
        </div>
      </div>
    </footer>
  );
}
