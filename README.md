# nxo-provider-app

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)

This side of the platform is managed by the clinic’s physicians and nurses. It receives record requests from patients which can either be fulfilled or rejected by the provider. To fulfill a record request, the provider uploads the requested record into the online portal and sends it to the patient. Records can also be sent (via email) directly to patients that didn’t make a request. The app charges the patient after they receive the record. 

The web app is also able to receive records sent from the patient client app. These records can be viewed in the web app, downloaded to the computer or uploaded to the provider’s EMR. Providers are able request records (via email) directly from patients who then send these documents through an online upload portal.

Finally the web app maintains a log of all the incoming and outgoing records in the share history. Outgoing records are those that have been sent to patients while incoming records are those that have been received from patients. (For now, the provider client app will focus only on patient to provider transfers)
