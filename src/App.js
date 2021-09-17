import { useEffect } from 'react';
// import ExpressionAtlasHeatmap from '@ebi-gene-expression-group/expression-atlas-heatmap-highcharts';
import { render as expressionAtlasHeatmapRender } from '@ebi-gene-expression-group/expression-atlas-heatmap-highcharts'


function App() {

  useEffect(() => {
    expressionAtlasHeatmapRender({
      query: {gene: 'ESR1'},
      target: 'container'
    });
  }, []);

  return (
    <div>
      <div id="container"/>
    </div>
  );
}

export default App;
