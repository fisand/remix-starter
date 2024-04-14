import { Line, LineChart } from 'recharts'

const mockData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const Feed = () => {
  return (
    <div className="my-5 flex-1 overflow-x-auto">
      <div className="container mx-auto lt-sm:px-6 px-10 space-y-5 ">
        <div className="overflow-x-auto">
          <div className="min-w-300 grid grid-cols-8 py-4 px-4 border-border border-b-1 border-solid text-sm">
            <div>Price Feed</div>
            <div>Last Updated</div>
            <div>Price</div>
            <div>Confidence</div>
            <div>1H</div>
            <div>24H</div>
            <div>7D</div>
            <div>Last 7 Days</div>
          </div>

          <>
            {Array(10)
              .fill(1)
              .map((i, index) => (
                <div
                  key={'key_' + index}
                  className="min-w-300 grid grid-cols-8 px-4 border-border border-b-1 border-solid text-sm hover:bg-accent/50 [&>div]:flex-col-center [&>div]:items-start"
                >
                  <div>11NCH/USD</div>
                  <div>{'<2s ago'}</div>
                  <div>$0.531</div>
                  <div>±$0.090</div>
                  <div className="text-green">0.65%</div>
                  <div className="text-red">0.82%</div>
                  <div className="text-red">7.89%</div>
                  <div>
                    <LineChart width={160} height={70} data={mockData}>
                      <Line
                        type="linear"
                        dot={false}
                        dataKey="pv"
                        stroke={index % 2 ? 'rgb(74,222,128)' : 'rgb(248,113,113)'}
                        strokeWidth={1}
                      />
                    </LineChart>
                  </div>
                </div>
              ))}
          </>
        </div>

        <div className="flex-center justify-between">
          <div className="flex-center gap-4">
            <div className="h-7 px-3 flex items-center text-xs bg-border/50 cursor-pointer rounded-sm">previous</div>
            <div className="h-7 px-3 flex items-center text-xs bg-border cursor-pointer rounded-sm">next</div>
          </div>
          <div className="text-xs">Page 1 of 50</div>
        </div>
      </div>
    </div>
  )
}

export default Feed
