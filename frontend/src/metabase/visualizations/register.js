import {
  registerVisualization,
  setDefaultVisualization,
} from "metabase/visualizations";

import ActionViz from "metabase/writeback/components/ActionViz";

import Scalar from "./visualizations/Scalar";
import SmartScalar from "./visualizations/SmartScalar";
import Progress from "./visualizations/Progress";
import Table from "./visualizations/Table";
import Text from "./visualizations/Text";
import LineChart from "./visualizations/LineChart";
import BarChart from "./visualizations/BarChart";
import WaterfallChart from "./visualizations/WaterfallChart";
import RowChart from "./visualizations/RowChart";
import PieChart from "./visualizations/PieChart";
import AreaChart from "./visualizations/AreaChart";
import ComboChart from "./visualizations/ComboChart";
import MapViz from "./visualizations/Map";
import ScatterPlot from "./visualizations/ScatterPlot";
import Funnel from "./visualizations/Funnel";
import Gauge from "./visualizations/Gauge";
import ObjectDetail from "./components/ObjectDetail";
import PivotTable from "./visualizations/PivotTable";
import ListViz from "./visualizations/List";
import Sankey from "./visualizations/Sankey";

export default function () {
  registerVisualization(Scalar);
  registerVisualization(SmartScalar);
  registerVisualization(Progress);
  registerVisualization(Gauge);
  registerVisualization(Table);
  registerVisualization(Text);
  registerVisualization(LineChart);
  registerVisualization(AreaChart);
  registerVisualization(BarChart);
  registerVisualization(WaterfallChart);
  registerVisualization(ComboChart);
  registerVisualization(RowChart);
  registerVisualization(ScatterPlot);
  registerVisualization(PieChart);
  registerVisualization(MapViz);
  registerVisualization(Funnel);
  registerVisualization(ObjectDetail);
  registerVisualization(PivotTable);
  registerVisualization(ListViz);
  registerVisualization(ActionViz);
  registerVisualization(Sankey);
  setDefaultVisualization(Table);
}
