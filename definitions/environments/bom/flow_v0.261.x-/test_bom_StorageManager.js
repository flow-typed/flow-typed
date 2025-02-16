/* @flow */

if (navigator.storage) {
  const persist: Promise<boolean> = navigator.storage.persist(); // correct
  // $FlowExpectedError[incompatible-use]
  const persisted: Promise<boolean> = navigator.storage.persisted(); // correct

  // $FlowExpectedError[incompatible-type]
  if (navigator.storage.estimate) {
    navigator.storage.estimate().then((estimate: StorageEstimate) => {
      const usage: number = estimate.usage; // correct
      const quota: number = estimate.quota; // correct 
      const usageDetails: { [StorageManagerRegisteredEndpoint]: number } = // incorrect
        // $FlowExpectedError[incompatible-type]
        estimate.usageDetails;
    });
  }
}
