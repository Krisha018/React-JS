const products = [
  {
    createdAt: "2022-08-05T03:05:36.547Z",
    ProductName: "Intelligent Steel Chicken",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="100%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "491.00",
    ProductDescription:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "1"
  },
  {
    createdAt: "2022-08-04T17:21:45.114Z",
    ProductName: "Ergonomic Bronze Towels",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "20.00",
    ProductDescription:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "2"
  },
  {
    createdAt: "2022-08-04T17:00:09.974Z",
    ProductName: "Unbranded Granite Tuna",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "514.00",
    ProductDescription:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "3"
  },
  {
    createdAt: "2022-08-04T22:54:09.343Z",
    ProductName: "Unbranded Granite Pizza",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "456.00",
    ProductDescription:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    id: "4"
  },
  {
    createdAt: "2022-08-04T20:46:06.684Z",
    ProductName: "Licensed Bronze Salad",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "871.00",
    ProductDescription:
      "The beautiful range of Apple Natural?? that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "5"
  },
  {
    createdAt: "2022-08-04T08:57:05.383Z",
    ProductName: "Awesome Rubber Salad",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "705.00",
    ProductDescription:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "6"
  },
  {
    createdAt: "2022-08-04T10:59:03.298Z",
    ProductName: "Awesome Bronze Salad",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "823.00",
    ProductDescription:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "7"
  },
  {
    createdAt: "2022-08-04T20:48:40.072Z",
    ProductName: "Sleek Wooden Sausages",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "424.00",
    ProductDescription:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: "8"
  },
  {
    createdAt: "2022-08-04T12:39:30.117Z",
    ProductName: "Practical Metal Hat",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "33.00",
    ProductDescription:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "9"
  },
  {
    createdAt: "2022-08-04T13:35:57.326Z",
    ProductName: "Unbranded Concrete Soap",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "847.00",
    ProductDescription:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "10"
  },
  {
    createdAt: "2022-08-04T06:31:50.711Z",
    ProductName: "Refined Plastic Keyboard",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "266.00",
    ProductDescription:
      "The Football Is Good For Training And Recreational Purposes",
    id: "11"
  },
  {
    createdAt: "2022-08-04T09:46:09.541Z",
    ProductName: "Sleek Steel Gloves",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "61.00",
    ProductDescription:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "12"
  },
  {
    createdAt: "2022-08-04T23:48:33.434Z",
    ProductName: "Intelligent Bronze Computer",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "547.00",
    ProductDescription:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "13"
  },
  {
    createdAt: "2022-08-04T15:16:02.359Z",
    ProductName: "Rustic Frozen Keyboard",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "295.00",
    ProductDescription:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "14"
  },
  {
    createdAt: "2022-08-04T14:00:28.591Z",
    ProductName: "Electronic Plastic Chicken",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "941.00",
    ProductDescription:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    id: "15"
  },
  {
    createdAt: "2022-08-05T01:40:55.085Z",
    ProductName: "Awesome Fresh Car",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "725.00",
    ProductDescription:
      "The beautiful range of Apple Natural?? that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "16"
  },
  {
    createdAt: "2022-08-04T21:21:27.072Z",
    ProductName: "Incredible Rubber Tuna",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "687.00",
    ProductDescription:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "17"
  },
  {
    createdAt: "2022-08-04T09:14:45.374Z",
    ProductName: "Incredible Rubber Table",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "934.00",
    ProductDescription:
      "The Football Is Good For Training And Recreational Purposes",
    id: "18"
  },
  {
    createdAt: "2022-08-04T20:36:49.476Z",
    ProductName: "Handmade Bronze Computer",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "56.00",
    ProductDescription:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    id: "19"
  },
  {
    createdAt: "2022-08-04T19:10:08.982Z",
    ProductName: "Recycled Fresh Chips",
    ProductImage: (
      <img
        src="http://loremflickr.com/640/480/food"
        height="50%"
        width="50%"
        align="center"
      />
    ),
    ProductPrice: "813.00",
    ProductDescription:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: "20"
  }
];
function Products() {
  return (
    <>
      <table width="40%">
        <tr>
          {products.map((pro) => {
            return (
              <>
                <div>
                  <tr>
                    <th colspan="2">
                      <th rowspan="3">
                        <td
                          style={{
                            border: "5 px solid blue",
                            backgroundColor: "pink",
                            color: "red"
                          }}
                        >
                          createdAt:
                          {pro.createdAt}
                          <br />
                          ProductName:
                          {pro.ProductName}
                          <br />
                          <br />
                          ProductImage:
                          <td style={{ align: "center", paddingLeft: "22%" }}>
                            {pro.ProductImage}
                            <br />
                            ProductPrice:
                            {pro.ProductPrice}
                            <br />
                            <br />
                            ProductDescription:
                            {pro.ProductDescription}
                            <br />
                            id:
                            {pro.id}
                          </td>
                        </td>
                      </th>
                    </th>
                  </tr>
                </div>
              </>
            );
          })}
        </tr>
      </table>
    </>
  );
}

export default Products;
