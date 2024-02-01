import Window from './Window';

const GraphBarStackThisWeek = async () => {
  return (
    <Window English="This Week's Study Time" Japanese='今週の勉強時間'>
      <div className='h-52'>A stacked bar graph displaying study data for the past seven days</div>
    </Window>
  );
};

export default GraphBarStackThisWeek;
