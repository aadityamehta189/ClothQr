import qrcode

website = "https://www.google.com"

qr = qrcode.make(website)

qr.save("myqr2.png")

print("Abe QR ban ke ready bhi ho gaya")