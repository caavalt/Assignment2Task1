 require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        const webmap = new WebMap({
          portalItem: {
            id: "96da50db61534714a3bc82ff97fd5971"
          }
        });
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
