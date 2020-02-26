import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyResponsiveLine from './nivo-line';

const data =
[
  {
    "id": "japan",
    "color": "hsl(80, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 107
      },
      {
        "x": "helicopter",
        "y": 35
      },
      {
        "x": "boat",
        "y": 202
      },
      {
        "x": "train",
        "y": 47
      },
      {
        "x": "subway",
        "y": 238
      },
      {
        "x": "bus",
        "y": 267
      },
      {
        "x": "car",
        "y": 60
      },
      {
        "x": "moto",
        "y": 26
      },
      {
        "x": "bicycle",
        "y": 218
      },
      {
        "x": "horse",
        "y": 173
      },
      {
        "x": "skateboard",
        "y": 199
      },
      {
        "x": "others",
        "y": 300
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(81, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 213
      },
      {
        "x": "helicopter",
        "y": 161
      },
      {
        "x": "boat",
        "y": 177
      },
      {
        "x": "train",
        "y": 165
      },
      {
        "x": "subway",
        "y": 62
      },
      {
        "x": "bus",
        "y": 63
      },
      {
        "x": "car",
        "y": 276
      },
      {
        "x": "moto",
        "y": 185
      },
      {
        "x": "bicycle",
        "y": 216
      },
      {
        "x": "horse",
        "y": 132
      },
      {
        "x": "skateboard",
        "y": 48
      },
      {
        "x": "others",
        "y": 99
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(351, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 134
      },
      {
        "x": "helicopter",
        "y": 236
      },
      {
        "x": "boat",
        "y": 208
      },
      {
        "x": "train",
        "y": 252
      },
      {
        "x": "subway",
        "y": 79
      },
      {
        "x": "bus",
        "y": 181
      },
      {
        "x": "car",
        "y": 144
      },
      {
        "x": "moto",
        "y": 2
      },
      {
        "x": "bicycle",
        "y": 0
      },
      {
        "x": "horse",
        "y": 67
      },
      {
        "x": "skateboard",
        "y": 269
      },
      {
        "x": "others",
        "y": 138
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(284, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 42
      },
      {
        "x": "helicopter",
        "y": 12
      },
      {
        "x": "boat",
        "y": 251
      },
      {
        "x": "train",
        "y": 206
      },
      {
        "x": "subway",
        "y": 191
      },
      {
        "x": "bus",
        "y": 280
      },
      {
        "x": "car",
        "y": 63
      },
      {
        "x": "moto",
        "y": 252
      },
      {
        "x": "bicycle",
        "y": 102
      },
      {
        "x": "horse",
        "y": 32
      },
      {
        "x": "skateboard",
        "y": 89
      },
      {
        "x": "others",
        "y": 225
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(5, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 251
      },
      {
        "x": "helicopter",
        "y": 242
      },
      {
        "x": "boat",
        "y": 237
      },
      {
        "x": "train",
        "y": 81
      },
      {
        "x": "subway",
        "y": 103
      },
      {
        "x": "bus",
        "y": 7
      },
      {
        "x": "car",
        "y": 50
      },
      {
        "x": "moto",
        "y": 279
      },
      {
        "x": "bicycle",
        "y": 297
      },
      {
        "x": "horse",
        "y": 0
      },
      {
        "x": "skateboard",
        "y": 75
      },
      {
        "x": "others",
        "y": 229
      }
    ]
  }
]

function App() {
  return (
    <div>
      <header>
      </header>
      <div class="graph-box">
        <MyResponsiveLine
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
