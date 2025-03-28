<div align="center">

[![NPM Version](https://img.shields.io/npm/v/%40ensofinance%2Fshortcuts-widget)](https://www.npmjs.com/package/%40ensofinance%2Fshortcuts-widget)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/EnsoBuild)](https://twitter.com/EnsoBuild)

</div>

# Shortcuts Widget

## Overview

This widget is a React component designed to provide a user-friendly interface for swapping tokens. It integrates with Enso API to allow not only simple swaps but also operations like zap-in.

## Features

- Swap any-to-any tokens
- Perform zap-in operations
- Display token details including balance, USD cost, slippage, etc.
- Enable DeFi operations composition since Enso API is used

## Installation

To install the widget, you need to have Node.js and npm installed. Then, run the following command in your project directory:

```bash
npm install @ensofinance/shortcuts-widget
```

## Usage

`wagmi` and `viem` are peer dependencies. Your project should be using them.

To use the widget in your React application, import the `SwapWidget` component and include it in your JSX:

```typescript
import React from 'react';
import SwapWidget from '@ensofinance/shortcuts-widget';

const App = () => {
    return (
        <div>
            <SwapWidget apiKey={"YOUR_API_KEY"} />
    </div>
);
};

export default App;
```

## Configuration

### Props

The `SwapWidget` component accepts the following props:

- `apiKey` (string): Enso API key (required)
- `tokenOut` (string): Token address for the output token
- `tokenIn` (string): Token address for the input token
- `chainId` (number): Chain ID for the blockchain network (required if tokenIn or tokenOut are provided)
- `themeConfig` (SystemConfig): Optional theme configuration
- `enableShare` (boolean): Enable route sharing functionality (copy with button)
- `obligateSelection` (boolean): Obligate token selection
- `rotateObligated` (boolean | 0 | 1): For use with `obligateSelection`, displays arrow to rotate the obligated token
- `indicateRoute` (boolean): Displays shortcut execution route

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Contact

For any questions or support, please contact the Enso Finance team on [telegram](https://t.me/enso_intent_engine).
