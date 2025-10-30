import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages([...messages, { role: 'user', text: inputMessage }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Спасибо за ваш запрос! Наш специалист проанализирует задачу и свяжется с вами в ближайшее время для обсуждения деталей проекта.' 
      }]);
    }, 1000);
    
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Brain" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold gradient-text">AI Agents</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground/80 hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('tech')} className="text-foreground/80 hover:text-primary transition-colors">Технологии</button>
            <button onClick={() => scrollToSection('solutions')} className="text-foreground/80 hover:text-primary transition-colors">Решения</button>
            <button onClick={() => scrollToSection('cases')} className="text-foreground/80 hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection('team')} className="text-foreground/80 hover:text-primary transition-colors">Команда</button>
            <button onClick={() => scrollToSection('blog')} className="text-foreground/80 hover:text-primary transition-colors">Блог</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">Контакты</button>
          </div>

          <Button onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="MessageSquare" className="mr-2" size={18} />
            AI Консультация
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-fade-in">
              Будущее бизнес-автоматизации
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
              Разработка
              <span className="gradient-text block">AI Агентов</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-fade-in">
              Создаём интеллектуальные системы, которые автоматизируют бизнес-процессы и повышают эффективность вашей компании
            </p>
            <div className="flex gap-4 justify-center animate-slide-up">
              <Button size="lg" onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                Наши кейсы
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: 'Zap', label: 'Быстрое внедрение', value: '2-4 недели' },
                { icon: 'TrendingUp', label: 'Рост эффективности', value: '+300%' },
                { icon: 'Shield', label: 'Безопасность', value: '100%' },
                { icon: 'Users', label: 'Довольных клиентов', value: '50+' }
              ].map((stat, i) => (
                <Card key={i} className="p-6 gradient-border bg-card/50 backdrop-blur">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tech" className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Технологии</Badge>
              <h2 className="text-5xl font-bold mb-6">Наш технологический стек</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Используем передовые AI-технологии и фреймворки для создания надежных решений
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Brain', title: 'Machine Learning', desc: 'GPT-4, Claude, LLaMA - интеграция лучших языковых моделей', color: 'from-primary to-blue-400' },
                { icon: 'Network', title: 'Agent Frameworks', desc: 'LangChain, AutoGen, CrewAI для построения сложных агентских систем', color: 'from-secondary to-purple-400' },
                { icon: 'Database', title: 'Vector Databases', desc: 'Pinecone, Weaviate для работы с эмбеддингами и семантическим поиском', color: 'from-accent to-cyan-400' },
                { icon: 'Code', title: 'Python & FastAPI', desc: 'Современный асинхронный backend для высоконагруженных систем', color: 'from-green-400 to-emerald-400' },
                { icon: 'Cloud', title: 'Cloud Infrastructure', desc: 'AWS, GCP, Azure - масштабируемая облачная инфраструктура', color: 'from-orange-400 to-red-400' },
                { icon: 'Lock', title: 'Security', desc: 'End-to-end шифрование, compliance с международными стандартами', color: 'from-pink-400 to-rose-400' }
              ].map((tech, i) => (
                <Card key={i} className="p-8 gradient-border hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon name={tech.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-foreground/70">{tech.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="py-32 bg-gradient-to-b from-transparent to-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Решения</Badge>
              <h2 className="text-5xl font-bold mb-6">AI агенты для вашего бизнеса</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Готовые решения для автоматизации ключевых бизнес-процессов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'Headphones', title: 'AI Customer Support', desc: 'Автоматическая обработка обращений клиентов 24/7 с точностью 95%' },
                { icon: 'FileText', title: 'Document Processing', desc: 'Анализ и обработка документов, извлечение данных, классификация' },
                { icon: 'BarChart3', title: 'Data Analytics Agent', desc: 'Автоматический анализ данных и генерация инсайтов для принятия решений' },
                { icon: 'Mail', title: 'Email Automation', desc: 'Интеллектуальная обработка входящей почты и автоматические ответы' },
                { icon: 'Calendar', title: 'Meeting Assistant', desc: 'Планирование встреч, подготовка материалов, ведение протоколов' },
                { icon: 'ShoppingCart', title: 'Sales Agent', desc: 'Автоматизация продаж: от квалификации лидов до закрытия сделок' }
              ].map((solution, i) => (
                <Card key={i} className="p-8 gradient-border hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur group">
                  <Icon name={solution.icon as any} className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-foreground/70 mb-6">{solution.desc}</p>
                  <Button variant="ghost" className="text-primary group-hover:translate-x-2 transition-transform">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Кейсы</Badge>
              <h2 className="text-5xl font-bold mb-6">Успешные проекты</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Реальные результаты наших клиентов после внедрения AI агентов
              </p>
            </div>

            <div className="space-y-8">
              {[
                { company: 'E-commerce платформа', industry: 'Ритейл', result: 'Сокращение времени ответа на 85%', metrics: '500K+ обращений/мес обрабатывается автоматически' },
                { company: 'Финтех стартап', industry: 'Финансы', result: 'Автоматизация 70% операций', metrics: 'ROI 340% за первые 6 месяцев' },
                { company: 'Медицинская клиника', industry: 'Здравоохранение', result: 'Оптимизация записи пациентов', metrics: 'Рост конверсии на 45%' }
              ].map((case_, i) => (
                <Card key={i} className="p-8 gradient-border bg-card/50 backdrop-blur hover:scale-[1.02] transition-transform">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold">{case_.company}</h3>
                        <Badge variant="outline">{case_.industry}</Badge>
                      </div>
                      <p className="text-xl text-primary mb-2">{case_.result}</p>
                      <p className="text-foreground/70">{case_.metrics}</p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      Читать кейс <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-32 bg-gradient-to-b from-card/30 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Команда</Badge>
              <h2 className="text-5xl font-bold mb-6">Эксперты AI</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Команда профессионалов с опытом в машинном обучении и разработке
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'Алексей Иванов', role: 'CTO & Co-founder', exp: '10+ лет в ML' },
                { name: 'Мария Петрова', role: 'Lead AI Engineer', exp: 'Ex-Яндекс, Google' },
                { name: 'Дмитрий Сидоров', role: 'Solutions Architect', exp: '50+ проектов' },
                { name: 'Анна Смирнова', role: 'Product Manager', exp: 'AI Product Expert' }
              ].map((member, i) => (
                <Card key={i} className="p-8 gradient-border text-center bg-card/50 backdrop-blur hover:scale-105 transition-transform">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/60">{member.exp}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Блог</Badge>
              <h2 className="text-5xl font-bold mb-6">Последние статьи</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Делимся знаниями и инсайтами об AI и автоматизации
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Как AI агенты меняют customer service', date: '15 окт 2024', readTime: '5 мин' },
                { title: 'LangChain vs AutoGen: что выбрать?', date: '10 окт 2024', readTime: '8 мин' },
                { title: 'RAG системы: полное руководство', date: '5 окт 2024', readTime: '12 мин' }
              ].map((post, i) => (
                <Card key={i} className="overflow-hidden gradient-border hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur group">
                  <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                    <Icon name="FileText" className="text-white" size={64} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                    <Button variant="ghost" className="text-primary group-hover:translate-x-2 transition-transform">
                      Читать <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="py-32 bg-gradient-to-b from-transparent to-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Нам доверяют</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-16 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={32} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto p-12 gradient-border bg-card/50 backdrop-blur">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-6">Начните ваш AI проект</h2>
                <p className="text-xl text-foreground/70">
                  Оставьте заявку или начните консультацию с нашим AI ассистентом
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Icon name="Mail" className="text-primary" size={24} />
                      <span>hello@aiagents.dev</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Phone" className="text-primary" size={24} />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="MapPin" className="text-primary" size={24} />
                      <span>Москва, Сколково</span>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="flex gap-4">
                    <Button size="icon" variant="outline">
                      <Icon name="Github" size={20} />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Icon name="Twitter" size={20} />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Заявка отправлена!",
                      description: "Мы свяжемся с вами в ближайшее время.",
                    });
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }} className="space-y-4">
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Компания"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                    <Textarea 
                      placeholder="Расскажите о вашей задаче..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[120px]"
                      required
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Отправить заявку
                    </Button>
                    <Button 
                      type="button"
                      onClick={() => setChatOpen(true)} 
                      variant="outline"
                      className="w-full"
                    >
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      Или попробуйте AI консультацию
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Brain" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold gradient-text">AI Agents</span>
            </div>
            <p className="text-foreground/60">© 2024 AI Agents. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Bot" className="text-primary" size={24} />
              AI Консультант
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4 py-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Sparkles" className="text-primary mx-auto mb-4 animate-float" size={48} />
                <h3 className="text-xl font-bold mb-2">Привет! Я AI ассистент</h3>
                <p className="text-foreground/70">Расскажите о вашей задаче, и я помогу подобрать решение</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                    : 'bg-card border border-border'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
              placeholder="Опишите вашу задачу..."
              className="min-h-[60px] resize-none"
            />
            <Button onClick={handleSendMessage} size="icon" className="h-[60px] w-[60px] bg-gradient-to-r from-primary to-secondary">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;