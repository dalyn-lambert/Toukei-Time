import Window from '@/Components/Window';

export default function NotFound() {
  return (
    <main>
      <Window English='404 Not Found' Japanese='404 Not Found'>
        <div className='text-center'>Could not find the requested resource.</div>
      </Window>
    </main>
  );
}
