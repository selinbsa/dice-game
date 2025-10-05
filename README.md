# 🎲 Dice Game — React + Vite

> Basit ama eğlenceli bir zar atma oyunu!  
> Player 1 (sen) ve Player 2 (bilgisayar) arasında geçer.  
> Her atışta zarlar döner, sonucu gösterir ve buton dinamik olarak güncellenir.

---
## 🌐 Canlı Demo

---

## 🕹️ Oyun Özeti

- Player 1 kullanıcı, Player 2 bilgisayar olarak oynar.  
- Her el tek zar atılır, kazanan, kaybeden veya beraberlik sonucu ekrana yazılır.  
- Zarlar atıldıktan sonra **3 saniye boyunca animasyonlu şekilde döner.**  
- Player 1 kullanıcı adı düzenlenebilir ve **localStorage** sayesinde kalıcıdır.  
- Buton, oyunun durumuna göre metin değiştirir:  
  - `Zar At 🎲`  
  - `Atılıyor...`  
  - `Tekrar At 🎲`

---

## 🧩 Kullanılan Teknolojiler

- ⚛️ **React** (Vite template)
- 🎨 **CSS3** (custom responsive tasarım)
- 💾 **LocalStorage** (kullanıcı adını saklamak için)
- 🕐 **setInterval / setTimeout** (zar animasyonu)

---

## 📂 Proje Yapısı

src/
┣ assets/
┃ ┣ dice1.png
┃ ┣ dice2.png
┃ ┣ dice3.png
┃ ┣ dice4.png
┃ ┣ dice5.png
┃ ┗ dice6.png
┣ components/
┃ ┗ Dice.jsx
┣ App.jsx
┣ App.css
┣ index.css
┗ main.jsx

---

## 🚀 Özellikler
Özellik	Açıklama
🎲 Dinamik Zar	Her 90ms’de değişen zar yüzleri
🧍 Kullanıcı Adı	Değiştirilebilir ve tarayıcıda saklanır
⏱️ 3 Saniye Bekleme	Zar dönerken bekleme animasyonu
🧠 PC Rakip	Bilgisayar otomatik olarak zar atar
🖋️ Modern UI	Responsive, sade ve eğlenceli arayüz

--- 

## 🧠 Öğrenilenler

React’te state ve effect kullanımı (useState, useEffect)

Vite ile proje oluşturma ve modüler komponent yapısı

CSS grid/flex ile hizalama ve animasyonlar

LocalStorage kullanımı

Asenkron işlemler (setTimeout, setInterval)