import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

function Home() {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6">Welcome to Home Page</h1>
      <Card title="Card Title" description="This is a Tailwind CSS card component." />
      <div className="mt-4">
        <Button text="Click Me" />
      </div>
    </div>
  );
}

export default Home;
