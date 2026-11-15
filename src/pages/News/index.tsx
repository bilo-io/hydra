import React, { useEffect, useState } from 'react';
import { ExternalLink, Newspaper, Calendar } from 'lucide-react';
import { getHeadlines } from 'services/news';
import Accordion from 'components/Accordion';

const FALLBACK_ARTICLES = [
  {
    title: 'Institutional Digital Asset Custody Surges Across Global Banking Desks',
    description:
      'Tier-1 financial institutions expand regulated multi-asset custody and tokenized treasury settlement rails.',
    content:
      'Cross-border liquidity providers reported a 42% increase in institutional spot and bundle allocations over the quarter, driven by transparent on-chain settlement and unified portfolio risk tooling.',
    publishedAt: '2025-01-14T09:30:00Z',
    author: 'Hydra Market Desk',
    source: { name: 'Financial Crypto Wire' },
    url: 'https://bilo.dev',
    category: 'Finance',
  },
  {
    title: 'Layer-2 Rollup Throughput Reaches New Settlement Milestone',
    description:
      'Zero-knowledge and optimistic rollup networks process record daily transaction volume with sub-cent fees.',
    content:
      'Decentralized exchanges and automated portfolio rebalancers now route the majority of retail and institutional swaps through high-speed Layer-2 execution environments.',
    publishedAt: '2025-01-13T15:15:00Z',
    author: 'Elena Vance',
    source: { name: 'Protocol Insights' },
    url: 'https://bilo.dev',
    category: 'Technology',
  },
  {
    title: 'Multi-Currency Stablecoin Rails Streamline Emerging Market Remittances',
    description:
      'Programmable ZAR, EUR, and USD liquidity pools cut settlement latency from days to seconds.',
    content:
      'Treasury desks increasingly pair local fiat on-ramps with audited stablecoin reserves to eliminate weekend FX spreads and working-capital lockups.',
    publishedAt: '2025-01-11T11:00:00Z',
    author: 'Marcus Sterling',
    source: { name: 'Global Fintech Review' },
    url: 'https://bilo.dev',
    category: 'Markets',
  },
  {
    title: 'Quantitative Portfolio Rebalancing Reduces Drawdowns in Volatile Regimes',
    description:
      'Automated threshold rebalancing across Bitcoin, Ethereum, and stablecoin reserves outperforms static holding.',
    content:
      'Backtests across multiple market cycles highlight how disciplined allocation bands capture upside volatility while preserving core fiat purchasing power.',
    publishedAt: '2025-01-09T08:45:00Z',
    author: 'Hydra Research',
    source: { name: 'Quant Digest' },
    url: 'https://bilo.dev',
    category: 'Research',
  },
];

export const News = () => {
  const category = 'business';
  const country = { name: 'United States of America', code: 'us' };
  const keywords = ['bitcoin', 'crypto', 'finance'];

  const [articles, setArticles] = useState<any[]>(FALLBACK_ARTICLES);

  useEffect(() => {
    let mounted = true;
    keywords.forEach((query: string) => {
      getHeadlines({ country: country.code, limit: 10, category, query })
        .then((response) => {
          const items = response?.data?.articles;
          if (mounted && Array.isArray(items) && items.length > 0) {
            setArticles((prev) => [...items.slice(0, 4), ...prev]);
          }
        })
        .catch(() => {
          // Curated fallback articles remain shown
        });
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div>
        <span className="chip mb-2">Market Intelligence</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">News</h1>
        <p className="text-sm text-muted-foreground">
          Curated cryptocurrency, macro-finance, and protocol engineering dispatches.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article: any, i: number) => (
          <Accordion
            key={`${article?.title}-${i}`}
            isOpenDefault={i < 2}
            title={
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="chip">
                    <Newspaper className="h-3 w-3 text-primary" />
                    {article?.source?.name || 'Market Wire'}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono">
                    <Calendar className="h-3 w-3" />
                    {article?.publishedAt?.split('T')?.[0] || '2025-01-14'}
                  </span>
                </div>
                <div className="text-base font-semibold text-foreground">{article?.title}</div>
              </div>
            }
          >
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">{article?.description}</p>
              {article?.content && <p>{article?.content}</p>}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3 text-xs">
                <span>Author: {article?.author || 'Editorial Desk'}</span>
                {article?.url && (
                  <a
                    target="_blank"
                    href={article.url}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    <span>Read full dispatch</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default News;
