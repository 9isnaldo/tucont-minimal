import React from 'react';
import Header from '../components/Header';
import AnimatedHeadline from '@/app/home/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-[calc(100vh)] pt-24 flex items-center justify-center">
        <div className="w-full">
          <AnimatedHeadline />
        </div>
      </main>

      <Footer />
    </>
  );
}