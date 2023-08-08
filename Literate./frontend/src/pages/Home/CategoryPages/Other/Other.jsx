// import React from "react";
// import {
//   Progress,
//   Spacer,
//   Modal,
//   Text,
//   Input,
//   Row,
//   Card,
//   Container,
// } from "@nextui-org/react";
// import { BudgetContext } from "../../../../contexts/budget";
// import { useContext } from "react";

// const Other = () => {
//   const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
//   const budgetLabels = Object.keys(budgetInfo.budgetData);
//   const subCatSum = new Array(budgetLabels.length).fill(0);
//   let allocationTotal = 0;
//   Object.keys(budgetInfo.budgetData).map((category, index) =>
//     budgetInfo.budgetData[category].map((listItem) => {
//       subCatSum[index] += parseInt(listItem.allocation);
//       allocationTotal += parseInt(listItem.allocation, 10);
//     })
//   );
//   return (
//     <Container>
//       <Text h1>
//         {budgetInfo.name}: ${budgetInfo.total}
//       </Text>
//       <Spacer y={9} />
//       <Container>
//         <Card>
//           <Text h2>
//             {" "}
//             {budgetInfo.budgetData["Housing,Utilities,&Bills"]} $
//             {allocationTotal}
//           </Text>
//           <Progress color="primary" value={1} />
//         </Card>
//       </Container>
//     </Container>
//   );
// }

// export default Other