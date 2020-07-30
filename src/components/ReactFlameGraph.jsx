import React from 'react';
import { FlameGraph } from 'react-flame-graph';

const data = {
    name: 'root',
    value: 5,
    children: [
      {
        name: 'custom tooltip',
        value: 1,
        tooltip: 'Custom tooltip shown on hover',
      },
      {
        name: 'custom colors',
        backgroundColor: '#35f',
        color: '#fff',
   
        value: 3,
        children: [
          {
            name: 'leaf',
            value: 2
          }
        ]
      },
    ],
  };

const ReactFlameGraph = () => {

    const onChange = node => console.log(`${node.name} focused`);

    return (
        <div>
            <FlameGraph data={data} height={200} width={400} onChange={onChange} />
        </div>
    )
}

export default ReactFlameGraph
