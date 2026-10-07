export function Privacy() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20 max-w-3xl mx-auto flex flex-col justify-center">
      <h1 className="text-4xl font-display font-semibold text-zinc-100 mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-zinc-400 font-normal leading-relaxed text-sm">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p>
          I built this portfolio website to showcase my engineering work. I believe in absolute transparency and minimal data collection. This policy outlines exactly what information is collected when you visit this site.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">1. No Tracking or Analytics</h2>
        <p>
          This website does not use Google Analytics, tracking pixels, or any third-party behavioral trackers. Your visit is not being monitored for advertising purposes. 
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">2. Contact Form Submissions</h2>
        <p>
          When you submit a message through the contact form, the information you provide (such as your name, email address, and message content) is sent directly to me. This information is used solely for the purpose of responding to your inquiry and is never shared, sold, or distributed to third parties.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">3. GitHub API Integration</h2>
        <p>
          The Projects section of this website fetches live data directly from the public GitHub API. No personal data from your session is transmitted to GitHub during this process.
        </p>
        
        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">4. Hosting & Infrastructure</h2>
        <p>
          This site is hosted on standard web infrastructure which may collect basic server logs (such as IP addresses and user agents) for security and operational purposes, as is standard across the internet.
        </p>
      </div>
    </div>
  );
}
