import ExpressionAtlasHeatmap from "@ebi-gene-expression-group/expression-atlas-heatmap-highcharts";

function App() {
  return (
    <div>
      <div id="heatmapContainer" />
      <ExpressionAtlasHeatmap
        target="heatmapContainer"
        query={{ species: "homo sapiens", gene: "ENSG00000091831" }}
        showAnatomogram={false}
      />
    </div>
  );
}

export default App;
