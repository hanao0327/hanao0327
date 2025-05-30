export default function Contact() {
  return (
    <div>
      {/* よくある質問 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">よくある質問</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">
              Q: チェックインの時間は何時ですか？
            </h3>
            <p>A: チェックインは午後3時から可能です。</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Q: キャンセルポリシーはどうなっていますか？
            </h3>
            <p>A: チェックインの24時間前まで無料でキャンセル可能です。</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Q: ペットは同伴可能ですか？</h3>
            <p>A: 申し訳ありませんが、ペットの同伴はできません。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
