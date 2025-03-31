import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeatureSection from "@/components/FeatureSection";
import Stats from "@/components/Stats";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import AboutSection from "@/components/AboutSection";
import { Briefcase, GraduationCap, BookOpen, LineChart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.immigration'),
      description: "Accompagnement personnalisé pour les démarches d'immigration et d'obtention de visas.",
      icon: <Briefcase size={24} />,
      link: "/services/immigration"
    },
    {
      title: t('services.training'),
      description: "Formation linguistique et professionnelle adaptée aux besoins du marché du travail.",
      icon: <GraduationCap size={24} />,
      link: "/services/formation"
    },
    {
      title: t('services.coaching'),
      description: "Coaching personnalisé pour le développement professionnel et personnel.",
      icon: <BookOpen size={24} />,
      link: "/services/coaching"
    },
    {
      title: t('services.professionalOrientation'),
      description: "Orientation professionnelle et conseil en carrière pour maximiser votre potentiel.",
      icon: <LineChart size={24} />,
      link: "/services/orientation"
    },
    {
      title: t('services.recruitment'),
      description: "Services de recrutement pour les entreprises à la recherche de talents internationaux.",
      icon: <Users size={24} />,
      link: "/services/recrutement"
    }
  ];

  const testimonialsData = [
    {
      name: "Sophie Martin",
      role: "Immigrante au Canada",
      testimonial: "Grâce à MigraPro, j'ai pu réaliser mon rêve de vivre au Canada. Leur accompagnement a été précieux à chaque étape du processus.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Thomas Dubois",
      role: "Professionnel en reconversion",
      testimonial: "La formation professionnelle que j'ai suivie avec MigraPro m'a permis de me reconvertir et de trouver un emploi dans mon domaine de prédilection.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Amina Koné",
      role: "Entrepreneure",
      testimonial: "Le coaching personnalisé m'a donné les outils nécessaires pour lancer mon entreprise au Canada. Un investissement qui a complètement changé ma vie!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const stats = [
    { value: "2500+", label: t('home.stats.clients') },
    { value: "98%", label: t('home.stats.satisfaction') },
    { value: "95%", label: t('home.stats.cases') },
    { value: "10+", label: t('home.stats.countries') }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        imageSrc="/lovable-uploads/dec47764-da66-4e06-994d-fd7295b61c3a.png"
      />

      <AboutSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        title={t('home.immigration.title')}
        subtitle={t('home.immigration.subtitle')}
        features={[
          {
            icon: <Briefcase size={24} />,
            title: "Évaluation d'admissibilité",
            description: "Analyse complète de votre profil pour déterminer vos meilleures options d'immigration"
          },
          {
            icon: <GraduationCap size={24} />,
            title: "Préparation du dossier",
            description: "Constitution méticuleuse de votre dossier d'immigration pour maximiser vos chances"
          },
          {
            icon: <BookOpen size={24} />,
            title: "Suivi personnalisé",
            description: "Accompagnement pas à pas tout au long du processus d'immigration"
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1000&auto=format&fit=crop"
      />

      <Stats
        title={t('home.stats.title')}
        description={t('home.stats.description')}
        stats={stats}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        title={t('home.career.title')}
        subtitle={t('home.career.subtitle')}
        features={[
          {
            icon: <Users size={24} />,
            title: t('home.career.interviews'),
            description: t('home.career.interviewsDesc')
          },
          {
            icon: <LineChart size={24} />,
            title: t('home.career.cv'),
            description: t('home.career.cvDesc')
          },
          {
            icon: <BookOpen size={24} />,
            title: t('home.career.skills'),
            description: t('home.career.skillsDesc')
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
        reversed={true}
      />

      <CTA
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        buttonText={t('home.cta.test')}
        buttonLink="/eligibility"
        secondaryButtonText={t('home.cta.contact')}
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default Index;
