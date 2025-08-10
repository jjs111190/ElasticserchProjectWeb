import React from 'react';
import { User, MapPin, Calendar, Award, Code, BookOpen, Coffee } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'] }
  ];

  const achievements = [
    { title: '교보문고 플랫폼 개발', description: '전자책 서비스 리뉴얼 프로젝트 리드', year: '2024' },
    { title: '의약 SNS 앱 개발 ', description: 'React Native을 사용하여 앱을 개발', year: '2025' },
    { title: '런닝 어플 개발', description: 'GPS을 사용하여 위치 추적 기반으로 런닝 어플 개발', year: '2023' },
    { title: 'Spring 웹 개발', description: '웹프로그래밍 수업중 웹 개발', year: '2022' }
  ];

  return (
    <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 프로필 정보 */}
        <div className="lg:col-span-1">
          <div className="text-center mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <User className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">장재석</h2>
            <p className="text-gray-600 mb-4">풀스택 개발자 & 기술 리더</p>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>경기, 대한민국</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>검퓨터 공학과 4년 +</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Coffee className="h-4 w-4" />
                <span>커피 중독자</span>
              </div>
            </div>
          </div>
        </div>

        {/* 자기소개 */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              자기소개
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                안녕하세요!  저는 건국대학교 글로컬캠퍼스 컴퓨터공학과에 재학 중인 장재석입니다. 
                <strong className="text-blue-600"> 교보문고</strong>와 같은 대규모 플랫폼 개발 경험을 바탕으로 
                사용자 중심의 혁신적인 웹 서비스를 만들어가고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                특히 <strong>SNS 소셜네트워킹 플랫폼</strong>과 <strong>데이터 관리 플랫폼</strong> 개발에 전문성을 가지고 있으며, 
                React, TypeScript, Node.js를 주력으로 사용합니다. 최근에는 AI/ML 기술을 활용한 
                개인화 서비스 개발에도 관심을 가지고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                코드의 품질과 사용자 경험을 동시에 추구하며, 팀과의 협업을 통해 더 나은 제품을 만들어가는 것을 즐깁니다. 
                새로운 기술 학습과 지식 공유를 통해 개발 커뮤니티에 기여하고자 합니다.
              </p>
            </div>
          </div>

          {/* 주요 성과 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-600" />
              주요 성과
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Code className="h-5 w-5 mr-2 text-green-600" />
          기술 스택
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-center">{skillGroup.category}</h4>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white rounded-md px-3 py-1 text-sm text-gray-700 text-center shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};