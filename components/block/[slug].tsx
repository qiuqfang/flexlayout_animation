// import FlexPage from "@/components/FlexPage";
// import { type NonEmptyArray, testCases2, testCases3 } from "@/data/testCases";
// import { type Tree } from "@/data/tree";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [selectedTestCases, setSelectedTestCases] =
//     useState<Tree[]>(testCases3);

//   useEffect(() => {
//     const testcasesArray: Record<string, Tree[]> = {
//       "2": testCases2,
//       "3": testCases3,
//     };

//     if (slug) {
//       setSelectedTestCases(testcasesArray[slug as string] ?? testCases3);
//     }
//   }, [slug]);

//   return <FlexPage testCases={selectedTestCases as NonEmptyArray<Tree>} />;
// }