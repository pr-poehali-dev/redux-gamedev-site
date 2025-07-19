import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A1A2E]/90 backdrop-blur-md border-b border-[#FF6B35]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={28} className="text-[#FF6B35]" />
              <span className="text-xl font-bold text-white">REDUXGAMEDEV</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-[#FF6B35] transition-colors story-link">Главная</a>
              <a href="#about" className="text-white hover:text-[#FF6B35] transition-colors story-link">О нас</a>
              <a href="#team" className="text-white hover:text-[#FF6B35] transition-colors story-link">Команда</a>
              <a href="#games" className="text-white hover:text-[#FF6B35] transition-colors story-link">Игры</a>
            </div>
            <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              REDUX
              <span className="text-[#FF6B35]">GAME</span>
              DEV
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Создаем будущее игровой индустрии с помощью передовых технологий и креативного подхода
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 py-4 text-lg hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                Наши игры
              </Button>
              <Button size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg">
                <Icon name="Users" size={20} className="mr-2" />
                О компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">О нас</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Мы — команда профессионалов, объединенных страстью к созданию инновационных игровых проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-[#FF6B35]/20 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Trophy" size={48} className="text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Инновации</h3>
                <p className="text-gray-300">Используем последние технологии для создания уникального игрового опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-[#FF6B35]/20 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Code" size={48} className="text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Технологии</h3>
                <p className="text-gray-300">Профессиональная разработка на современных игровых движках</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-[#FF6B35]/20 hover-scale">
              <CardContent className="p-8 text-center">
                <Icon name="Heart" size={48} className="text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Качество</h3>
                <p className="text-gray-300">Каждый проект создается с вниманием к деталям и любовью к играм</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Наша команда</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Талантливые разработчики, дизайнеры и продюсеры, создающие игры мирового уровня
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Юзефович Давид", role: "Разработчик", icon: "Code" },
              { name: "Trane", role: "Саунд-дизайнер", icon: "Music" }
            ].map((member, index) => (
              <Card key={index} className="bg-white/10 border-[#FF6B35]/20 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#FF6B35] text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-24 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Наши игры</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Портфолио успешных проектов, завоевавших сердца миллионов игроков
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Car Street Racing", genre: "Захватывающая игра про гонки на телефон!", status: "В разработке" },
              { title: "The Remains", genre: "Трогательная история про выживание в мире пост-апокалипсис", status: "В разработке" }
            ].map((game, index) => (
              <Card key={index} className="bg-white/10 border-[#FF6B35]/20 hover-scale group cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-[#FF6B35]/20 to-[#1A1A2E]/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Play" size={32} className="text-[#FF6B35] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{game.genre}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FF6B35] text-xs font-semibold bg-[#FF6B35]/20 px-2 py-1 rounded">
                      {game.status}
                    </span>
                    <Icon name="ArrowRight" size={16} className="text-[#FF6B35]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-[#1A1A2E] border-t border-[#FF6B35]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Gamepad2" size={24} className="text-[#FF6B35]" />
            <span className="text-lg font-bold text-white">REDUXGAMEDEV</span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 ReduxGameDev. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;