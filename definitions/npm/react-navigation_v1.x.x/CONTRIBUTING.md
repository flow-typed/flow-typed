# Contributing to the React Navigation Flow libdef

Please do not make changes directly to the libdef file in `flow-typed` without first submitting a PR to the [libdef within the `react-navigation` repo](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js). After your PR has been accepted in `react-navigation`, you can go ahead and submit a PR on `flow-typed`.

We admittedly have a slightly unusual system for maintaing our Flow types. We used to host Flow types directly in-package, but that prevented us from simultaneously supporting multiple React Native versions. To enable that support, we've moved our libdef to `flow-typed`, but we still want to (1) have our CI typecheck the libdef against our example projects, and (2) review any changes to the libdef.
