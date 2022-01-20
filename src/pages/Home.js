import React, { useState, useMemo } from "react";
import { TileLayout } from "@progress/kendo-react-layout";
import { Switch } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-material/dist/all.css";
import Weather from "./Weather";
import Joke from "./joke";
import Map from "./Map";
import Pokemon from "./Pokemon";
import Movies from "./Movie";
import Chat from "./Chat";
import ChuckNorrisJoke from './ChuckNorrisJoke'
import Bitcoin from "./Bitcoin";

// Basic positions
const initialPositions = [
  {
    widgetId: "1", //Weather
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    widgetId: "2", //Joke
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    widgetId: "3", //Map
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    widgetId: "4", //Pokemon
    col: 3,
    colSpan: 3,
    rowSpan: 2,
  },
  {
    widgetId: "5", //Movies
    col: 1,
    rowSpan: 2,
    colSpan: 2,
  },
  {
    widgetId: "6", // Chat
    col: 1,
    rowSpan: 3,
  colSpan: 6,
},  {
    widgetId: "7", // Bitcoin
    col: 1,
    rowSpan: 3,
    colSpan: 4,
},
];

// Store positions
const getPositions = (initialPositions) => {
  return (
    JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};

const widgetsConfig = [
  {
    id: "1",
    header: "Météo",
    body: <Weather />,
    active: true,
  },
  {
    id: "2",
    header: "Choose your Joke type",
    body: <><Joke /><ChuckNorrisJoke /></>,
    active: true,
  },
  {
    id: "3",
    header: "Map",
    body: <Map />,
    active: true,
  },
  {
    id: "4",
    header: "Pokemon",
    body: <Pokemon />,
    active: true,
  },
  {
      id: "5",
      header: "Movies",
      body: <Movies />,
      active: true,
  },
  {
    id: "6",
    header: "Chat",
    body: <Chat />,
    active: true,
},  {
    id: "7",
    header: "Bitcoins",
    body: <Bitcoin />,
    active: true,
},
];


function Home() {
  const [positions, setPositions] = useState(getPositions(initialPositions));
  const [widgets, setWidgets] = useState(widgetsConfig);

  const activeWidgets = useMemo(() => {
    return widgets.reduce((acc, widget) => {
      if (!widget.active) return acc;
      acc.push(widget);
      return acc;
    }, []);
  }, [widgets]);

  const filteredPositions = useMemo(() => {
    return positions.filter((position) => {
      return activeWidgets.find((widget) => widget.id === position.widgetId)
        ?.active;
    });
  }, [activeWidgets, positions]);

  const handleReposition = (e) => {
    setPositions(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };

  const onResetLayout = () => {
    setPositions(initialPositions);
    localStorage.setItem(
      "dashboard-positions",
      JSON.stringify(initialPositions)
    );
  };

  const onToggleWidget = (e) => {
    const { id } = e.target.props;
    const { value } = e.target;
    const updatedWidgets = widgets.map((widget) => {
      if (widget.id === id) {
        return {
          ...widget,
          active: value,
        };
      }
      return widget;
    });

    setWidgets(updatedWidgets);
  };
  return (
    <div className="home">
      <div className="k-display-flex">
        <aside className="k-ml-4 dashboardAside">
          <div className="k-mb-6">
            <button className="k-button" onClick={onResetLayout}>
              Reset Layout
            </button>
          </div>
          <div>
            <h2 className="k-mb-4"> Toggle Widget</h2>
            <div>
              {widgets.map((widget) => {
                return (
                  <div className="k-mb-2" key={widget.id}>
                    <Switch
                      checked={widget.active}
                      onChange={onToggleWidget}
                      id={widget.id}
                    />
                    <label className="k-ml-3">{widget.header}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
        <TileLayout
          className="titleLayout"
          columns={4}
          rowHeight={255}
          positions={filteredPositions}
          gap={{ row: 10, columns: 10 }}
          onReposition={handleReposition}
          items={activeWidgets}
        />
      </div>
    </div>
  );
}

export default Home;
