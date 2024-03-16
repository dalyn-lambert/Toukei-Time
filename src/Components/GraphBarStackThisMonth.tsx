import Window from './Window';

const GraphBarStackThisMonth = async () => {
  return (
    <Window English="This Month's Study Time" Japanese='今月の勉強時間'>
      <div className='h-52'>A stacked bar graph displaying study data for the current month</div>
    </Window>
  );
};

export default GraphBarStackThisMonth;
