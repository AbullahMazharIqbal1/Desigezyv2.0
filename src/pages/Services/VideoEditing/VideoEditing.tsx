
import Hero from './Hero';
import ProcessHeading from './ProcessHeading';
import ProcessTimeline from './ProcessTimeline';
import RelatedProjects from './RelatedProjects';




export default function VideoEditing() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
     
      
      <main>
        <Hero />
        <RelatedProjects />
        <ProcessHeading/>
        <ProcessTimeline/>
  
      </main>
      
    </div>
  );
}