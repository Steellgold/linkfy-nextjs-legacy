/* eslint-disable max-len */
/* eslint-disable camelcase */
import { Card } from '@/lib/components/ui/card';
import { LinksTable } from './links-datatable';
import { Link, linksColumns } from './links-datatable.type';

export default function History() {
  const links: Link[] = [
    {
      id: 1,
      url: 'https://ui.shadcn.com/docs/components/data-table',
      slug: 'example',
      clicks: 75,
      created_at: '2021-10-10',
      status: 'active',
      protected: false,
    },
    {
      id: 2,
      url: 'https://www.figma.com/file/eUVboDHacjzRM3CTvhXf5i/Untitled?type=design&node-id=0-1&mode=design&t=hvcE7DFTTxdomK61-0',
      slug: 'example',
      clicks: 244,
      created_at: '2021-10-10',
      status: 'active',
      protected: false,
    },
    {
      id: 3,
      url: 'https://github.com/Virtual-Royaume/Royaume-Frontend/blob/main/src/app/layout.tsx',
      slug: 'example',
      clicks: 876,
      created_at: '2021-10-10',
      status: 'active',
      protected: true,
    },
    {
      id: 4,
      url: 'https://www.npmjs.com/package/react-qrcode-logo',
      slug: 'example',
      clicks: 4,
      created_at: '2021-10-10',
      status: 'inactive',
      protected: false,
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=9xqlkAPnoTY',
      slug: 'example',
      clicks: 6,
      created_at: '2021-10-10',
      status: 'disabled',
      protected: false,
    },
    {
      id: 6,
      url: 'https://vercel.com/steellgold/simplist/settings/domains',
      slug: 'example',
      clicks: 78,
      created_at: '2021-10-10',
      status: 'active',
      protected: true,
    },
    {
      id: 7,
      url: 'https://www.amazon.fr/gp/product/B07T44VVGF/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1',
      slug: 'example',
      clicks: 46,
      created_at: '2021-10-10',
      status: 'active',
      protected: false,
    },
    {
      id: 8,
      url: 'https://example.com',
      slug: 'example',
      clicks: 22,
      created_at: '2021-10-10',
      status: 'inactive',
      protected: false,
    },
    {
      id: 9,
      url: 'https://lucide.dev/icons/?focus=&search=lock',
      slug: 'example',
      clicks: 6,
      created_at: '2021-10-10',
      status: 'disabled',
      protected: false,
    },
    {
      id: 10,
      url: 'https://www.reverso.net/orthographe/correcteur-francais/',
      slug: 'example',
      clicks: 789,
      created_at: '2021-10-10',
      status: 'active',
      protected: true,
    },
    {
      id: 11,
      url: 'https://x.com/home',
      slug: 'example',
      clicks: -1,
      created_at: '2021-10-10',
      status: 'active',
      protected: false,
    },
  ];

  return (
    <div className="mt-10 flex flex-col items-center justify-center px-3 md:mt-16">
      <Card className="w-full max-w-[70rem]">
        <LinksTable columns={linksColumns} data={links} />
      </Card>
    </div>
  );
}
