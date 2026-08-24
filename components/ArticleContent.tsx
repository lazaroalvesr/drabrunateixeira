import Image from 'next/image';
import type { ArticleBlock } from '../data/articles';

export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="max-w-[65ch] space-y-6 text-[16px] leading-[1.6] text-[#0A0A0A] md:text-[18px]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index}>{block.text}</p>;
          case 'heading': {
            const Tag = block.level === 3 ? 'h3' : 'h2';
            return (
              <Tag key={index} className={`font-['Display'] font-semibold ${block.level === 3 ? 'text-[20px]' : 'text-[28px] md:text-[40px]'}`}>
                {block.text}
              </Tag>
            );
          }
          case 'list': {
            const ListTag = block.style === 'number' ? 'ol' : 'ul';
            return (
              <ListTag key={index} className={`ml-5 space-y-2 ${block.style === 'number' ? 'list-decimal' : 'list-disc'}`}>
                {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
              </ListTag>
            );
          }
          case 'quote':
            return (
              <blockquote key={index} className="border-l-[3px] border-[#D1AD7D] pl-5 text-[19px] italic text-[#0A0A0A] md:text-[22px]">
                {block.text}
              </blockquote>
            );
          case 'image':
            return (
              <span key={index} className="relative block h-70 w-full overflow-hidden rounded-xl md:h-100">
                <Image src={block.src} alt={block.alt} fill sizes="(max-width: 767px) 100vw, 760px" className="object-cover" />
              </span>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
