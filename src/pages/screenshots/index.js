import React from 'react';
import Layout from '@theme/Layout';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/img/screenshots/login.png',
    thumbnail: '/img/screenshots/login.png',
  },
  {
    original: '/img/screenshots/dashboard.png',
    thumbnail: '/img/screenshots/dashboard.png',
  },
  {
    original: '/img/screenshots/model-build.png',
    thumbnail: '/img/screenshots/model-build.png',
  },
  {
    original: '/img/screenshots/model-view.png',
    thumbnail: '/img/screenshots/model-view.png',
  },
  {
    original: '/img/screenshots/task.png',
    thumbnail: '/img/screenshots/task.png',
  },
  {
    original: '/img/screenshots/bug.png',
    thumbnail: '/img/screenshots/bug.png',
  },
];

function Screenshots() {
  return (
    <Layout title="Screenshots">
      <ImageGallery items={images} />
    </Layout>
  );
}

export default Screenshots;
