import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 이메일 전송 로직을 추가
    alert('메시지가 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '이메일',
      value: 'jjs111190@gmail.com',
      href: 'jjs111190@gmail.com'
    },
    {
      icon: Phone,
      label: '전화번호',
      value: '+82 10-4734-8579',
      href: 'tel:+821047348579'
    },
    {
      icon: MapPin,
      label: '위치',
      value: '경기, 대한민국',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jjs111190',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      href: '',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          연락처
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요. 
          빠른 시일 내에 답변드리겠습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Send className="h-6 w-6 mr-2 text-blue-600" />
            메시지 보내기
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="hong@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                제목 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="프로젝트 협업 제안"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                메시지 *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="안녕하세요. 프로젝트 협업에 대해 문의드리고 싶습니다..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              메시지 전송
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              연락 정보
            </h2>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{info.label}</div>
                      <div className="font-semibold text-gray-900">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              소셜 미디어
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 ${social.color}`}
                  >
                    <Icon className="h-6 w-6 mr-3" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-blue-600" />
              현재 상태
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">새로운 프로젝트 수락 가능</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">평균 응답 시간: 24시간 이내</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">원격 근무 선호</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};