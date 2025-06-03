import BottomMenu from "@/components/bottomMenu/BottomMenu";
import FeedList from "@/components/feed/FeedList";
import ReceiptScanner from "@/components/receiptScanner/ReceiptScanner";

export default function Home() {
  return (
    <>
      <div className="content">
        메인
        {/* <FeedList/> */}
        <ReceiptScanner/>
      </div>
      <BottomMenu />
    </>
  );
}
