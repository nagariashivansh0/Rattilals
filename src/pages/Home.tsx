import AboutSection from '../components/AboutSection';
import BulkOrdersSection from '../components/BulkOrdersSection';
import Hero from '../components/Hero';
import LocationsSection from '../components/LocationsSection';
import SignatureSection from '../components/SignatureSection';
import SocialProofStrip from '../components/SocialProofStrip';
import SweetsGrid from '../components/SweetsGrid';
import {
  aboutParagraphs,
  contact,
  locations,
  previewItems,
  signatureItems,
  socialProofSnippets,
} from '../data/siteContent';

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureSection items={signatureItems} />
      <SweetsGrid items={previewItems} />
      <AboutSection paragraphs={aboutParagraphs} />
      <LocationsSection locations={locations} email={contact.email} />
      <SocialProofStrip snippets={socialProofSnippets} />
      <BulkOrdersSection
        note={contact.bulkOrderNote}
        phones={contact.bulkOrderPhones}
        displayPhones={contact.bulkOrderDisplay}
        deliveryNote={contact.deliveryNote}
      />
    </>
  );
}
