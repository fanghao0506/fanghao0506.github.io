 %% 图像拼接/图像合并/图像融合
 close all
 clear all
 A = imread('C:\Users\92870\Desktop\Msc\thesis\fast-style-transfer\input_img\edinburgh22.jpg');%读入图像1.jpg
 B = imread('C:\Users\92870\Desktop\Msc\website\fanghao0506.github.io\images\vqgan_clip\initial\image30.png');%读入图像2.jpg
 A = imresize(A,[length(B) width(B)]);
 C = [A,B];%拼接图像
 figure,imshow(C);%展示图像（非必需）
imwrite(C,'C:\Users\92870\Desktop\Msc\website\fanghao0506.github.io\images\vqgan_clip\image30.png');%保存图像，命名为3.jpg
