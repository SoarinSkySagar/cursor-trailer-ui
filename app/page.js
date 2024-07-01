import Card from "@/components/Card";

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ overflow: 'auto', maxHeight: '100vh', padding: '20px', scrollbarWidth: 'none',  }}>
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
        <Card 
          title="Card Title" 
          content="This is the content of the card. It takes up about 60% of the screen width."
        />
      </div>
    </div>
  );
}
