import Window from '@/Components/Window';

export default function ThisMonthPage() {
  return (
    <div className='flex flex-col gap-4'>
      <Window English='this month' Japanese='今月'>
        Some kind of monthly data
      </Window>
    </div>
  );
}
