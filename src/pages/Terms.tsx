export function Terms() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20 max-w-3xl mx-auto flex flex-col justify-center">
      <h1 className="text-4xl font-display font-semibold text-zinc-100 mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-zinc-400 font-normal leading-relaxed text-sm">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p>
          By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">1. Intellectual Property</h2>
        <p>
          The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. Unless specifically stated otherwise (such as open-source code repositories linked on the site), you may not reproduce, download, transmit or re-publish any part of this website without prior written consent.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">2. Open Source Projects</h2>
        <p>
          Projects showcased on this website may be linked to public GitHub repositories. The code within those repositories is governed by their respective licenses (e.g., MIT, GPL) as specified in each repository.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">3. Disclaimer of Warranties</h2>
        <p>
          This website is provided "as is" without any representations or warranties, express or implied. I make no representations or warranties in relation to this website or the information and materials provided on this website.
        </p>
        
        <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">4. Contact Submissions</h2>
        <p>
          When using the contact form, you agree not to submit any defamatory, abusive, profane, threatening, offensive, or illegal materials.
        </p>
      </div>
    </div>
  );
}
