import { ReactElement } from 'react';
// utils
import { getAllPosts } from '../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../src/utils/get-mardown/marketing/case-studies';
// @types
import { BlogPostProps } from '../src/@types/blog';
import { CaseStudyProps } from '../src/@types/marketing';
// _data
import { _members, _pricingMarketing } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { PricingMarketing } from '../src/sections/pricing';
import { TeamMarketingLangding } from '../src/sections/team';
import { BlogMarketingLatestPosts } from '../src/sections/blog';
import {
  MarketingFreeSEO,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../src/sections/@marketing';

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
  caseStudies: CaseStudyProps[];
};

export default function MarketingLandingPage({ posts, caseStudies }: Props) {
  return (
    <Page title="Aura Nepal">
      <MarketingLandingHero />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingCaseStudies caseStudies={caseStudies.slice(-6)} />

      <TeamMarketingLangding members={_members} />

      <MarketingFreeSEO />
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}
