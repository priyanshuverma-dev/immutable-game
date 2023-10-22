import { checkoutSdk, config } from "@imtbl/sdk";
import { Web3Provider } from "@ethersproject/providers";
// Create a new Immutable SDK configuration
const baseConfig = new config.ImmutableConfiguration({
  environment: config.Environment.SANDBOX,
});

// Instantiate the Checkout SDKs with the default configurations
const checkout = new checkoutSdk.Checkout({
  baseConfig,
  isBridgeEnabled: true,
  // ... other configurations
});

const getProvider = async () => {
  try {
    // const type = checkoutSdk.WalletFilterTypes.ALL;
    // const wallets = await checkout.getWalletAllowList({ type });
    // // The previous provider; here set as an empty object for sample purposes.
    // const walletProvider = checkoutSdk.WalletProviderName.PASSPORT;
    // checkout
    //   .connect({
    //     provider: new Web3Provider(),
    //   })
    //   .then((resp) => console.log(resp));
    // console.log(provider);
  } catch (error) {
    console.log(error);
  }
};

export { checkout, getProvider };
