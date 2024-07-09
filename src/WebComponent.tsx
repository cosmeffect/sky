import { customElement } from 'solid-element';
import BskyEmbed from './BskyEmbed';

customElement('bsky-embed', {
  username: '',
  feed: '',
  limit: 64,
  mode: '',
  linkTarget: '_self',
  linkImage: true,
  customStyles: '',
  search: '',
}, BskyEmbed);
