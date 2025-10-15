import GithubStats from '../ui/GithubStats';

const GithubSection = () => {
  return (
    <section id="github" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">GitHub Contributions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tracking my coding activity, open-source contributions, and project development journey
          </p>
        </div>
        
        <GithubStats 
          username="Udaykalse" 
          contributionCount={303} 
        />
      </div>
    </section>
  );
};

export default GithubSection;