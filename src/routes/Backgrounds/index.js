import React from 'react';

import { ResourceItem, Section, Article } from '../../components';
import data from './data/data.json';

export default function Backgrounds() {
  return (
    <Section title="Backgrounds">
      <Article>
        {data.map(item => (
          <ResourceItem {...item} key={item.href} />
        ))}
      </Article>
    </Section>
  );
}