import { Clipboard } from "lucide-react";

export default function DevEnvironment() {
  return (
    <div className="min-h-screen bg-[#1e1837] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a1e4a] to-[#1e1837] z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-10 z-10"></div>
      <div className="relative z-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#ff6900]">Development</span> environments
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">and endpoints</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#ff6900] mt-2 mr-4"></div>
              <div>
                <h3 className="text-[#ff6900] text-xl font-semibold mb-2">
                  Sandbox environment:
                </h3>
                <div className="flex items-center bg-[#2a1e4a] rounded p-2">
                  <Clipboard className="w-5 h-5 mr-2 text-[#ff6900]" />
                  <span className="text-sm">
                    https://sandbox-api.didww.com/v3/
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#ff6900] mt-2 mr-4"></div>
              <div>
                <h3 className="text-[#ff6900] text-xl font-semibold mb-2">
                  Production environment:
                </h3>
                <div className="flex items-center bg-[#2a1e4a] rounded p-2">
                  <Clipboard className="w-5 h-5 mr-2 text-[#ff6900]" />
                  <span className="text-sm">https://api.didww.com/v3/</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">
              DIDWW maintains both a sandbox and a production environment for
              the API.
            </h3>
            <p className="text-sm opacity-80">
              While both environments are perfect replicas of one another, they
              are maintained separately so as not to interfere with your live
              data. This structure provides your developers with full access to
              extensive testing for unlimited time before rolling out your
              services to production.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-[#ff6900] px-4 py-1 rounded-lg hover:bg-[#ff8c40] text-white">
                Get started
              </button>
              <button
                variant="outline"
                className="border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white"
              >
                API docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
