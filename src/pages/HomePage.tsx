import React from 'react';
import { ArrowRight, Star, TrendingUp, Award, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const stats = [
    { label: '프로젝트', value: '110+', icon: Star },
    { label: '개발 이력', value: '4년+', icon: TrendingUp },
    { label: '주요 성과', value: '5개', icon: Award },
    { label: '팀원', value: '2', icon: Users }
  ];

  const featuredProjects = [
    {
      title: '교보문고 전자책 플랫폼',
      description: '대규모 전자책 서비스 리뉴얼 프로젝트',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Node.js']
    },
    {
      title: 'AI 도서 추천 시스템',
      description: '머신러닝 기반 개인화 추천 엔진',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'FastAPI']
    },
    {
      title: '실시간 채팅 플랫폼',
      description: '대용량 트래픽 처리 가능한 채팅 서비스',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Socket.io', 'Redis', 'MongoDB']
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            창의적인 개발자
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            사용자 중심의 웹 서비스를 개발하며, 교보문고와 같은 대규모 플랫폼 개발 경험을 보유하고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              프로젝트 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-colors"
            >
              프로필 보기
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="text-2xl font-light text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-light">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-light text-gray-900 mb-3">
            사용된 기술 스택
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            이 포트폴리오 웹사이트는 최신 웹 기술로 구축되었습니다
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React', description: 'UI 라이브러리' },
            { name: 'TypeScript', description: '타입 안전성' },
            { name: 'Tailwind CSS', description: '스타일링' },
            { name: 'Vite', description: '빌드 도구' },
            { name: 'Lucide React', description: '아이콘' },
            { name: 'Netlify', description: '배포' },
            { name: 'Responsive', description: '반응형 디자인' },
            { name: 'PWA Ready', description: '모바일 최적화' }
          ].map((tech, index) => (
            <div key={index} className="bg-white p-4 border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-10 h-10 mx-auto mb-3 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-700 font-medium text-sm">{tech.name.charAt(0)}</span>
              </div>
              <h3 className="font-medium text-gray-900 text-center mb-1 text-sm">{tech.name}</h3>
              <p className="text-xs text-gray-600 text-center font-light">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-light text-gray-900 mb-3">
            주요 프로젝트
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            다양한 분야에서 진행한 프로젝트들 중 대표적인 작업들을 소개합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            모든 프로젝트 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border border-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-3">
            함께 프로젝트를 진행해보세요
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-light">
            새로운 아이디어를 현실로 만들어드립니다. 언제든지 연락주세요!
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            연락하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};