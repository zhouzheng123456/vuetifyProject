<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-breadcrumbs :items="links" divider=">" class="px-0 py-3"></v-breadcrumbs>
      </v-col>
      <v-col cols="1" class="text-right">
        <v-btn icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
          :loading="loading"
          loading-text="数据加载中..."
          show-select
          class="elevation-1"
        >
          <template v-slot:top>
            <v-row no-gutters>
              <v-col>
                <v-toolbar flat>
                  <v-btn color="primary" class>
                    <v-icon>mdi-plus</v-icon>新增
                  </v-btn>
                  <v-btn color="error" class="ml-2" @click="del">
                    <v-icon>mdi-delete-empty-outline</v-icon>删除
                  </v-btn>
                  <v-btn color="warning" class="ml-2">
                    <v-icon>mdi-cloud-upload-outline</v-icon>导入
                  </v-btn>
                  <v-btn color="info" class="ml-2">
                    <v-icon>mdi-cloud-download-outline</v-icon>导出
                  </v-btn>
                </v-toolbar>
              </v-col>
              <v-col>
                <v-toolbar flat>
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  append-icon="mdi-subdirectory-arrow-left"
                  color="secondary"
                  label="搜索图标"
                  solo-inverted
                  hide-details
                  flat
                ></v-text-field>
                </v-toolbar>
              </v-col>
            </v-row>

            <v-divider />
          </template>
          <template v-slot:item.first_col="{item}">
            <span>{{desserts.map(x => {return x.id; }).indexOf(item.id)+1}}</span>
          </template>
          <template v-slot:item.createTime="{item}">
            <span>{{item.createTime.substring(0,19).replace("T"," ")}}</span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { DocsApi } from "./admin-services";
import Message from "@/components/message";

export default {
  data: () => ({
    links: [
      {
        text: "首页",
        disabled: false,
        href: "/#/index"
      },
      {
        text: "文件管理",
        disabled: false,
        href: "/#/docs"
      },
      {
        text: "文件分类",
        disabled: true,
        href: "/#/"
      }
    ],

    open: [],
    active: [],
    items: [
      {
        id: "0",
        name: "政策文件知识库",
        children: []
      }
    ],
    // 数据表格数据
    headers: [
      { text: "#", value: "first_col", sortable: false },
      { text: "标题", value: "title", align: "left" },
      { text: "创建人", value: "creator" },
      { text: "创建时间", value: "createTime" },
      { text: "操作人", value: "operator" },
      { text: "操作时间", value: "operateTime" },
      { text: "状态", value: "state" }
    ],
    desserts: [],
    loading: false
  }),
  created() {
    DocsApi.clazz_list().then(
      res => {
        this.items[0].children = this.array2tree(res.data.rows);
        this.open = ["0"];
      },
      err => {
        window.console.log(err);
      }
    );
    this.loading = true;
    DocsApi.detail_list().then(
      res => {
        this.desserts = res.data.rows;
        this.loading = false;
      },
      err => {
        window.console.log(err);
      }
    );
  },
  watch: {
    active() {
      var clazz_id = this.active[0];
      Message.alert(clazz_id);
    }
  },
  methods: {
    array2tree: function(data) {
      let translator = (data, pid) => {
        var tree = [];
        data.forEach(item => {
          if (item.pid == pid) {
            var temp = translator(data, item.id);
            item.children = temp.length > 0 ? temp : undefined;
            tree.push(item);
          }
        });
        return tree;
      };
      //返回最终的结果
      return translator(data, "0");
    },
    del: () => {
      Message.confirm("您好", {
        callback: type => {
          window.console.log("click btn : " + type);
        }
      });
    }
  }
};
</script>

<style>
.v-treeview-node__root {
  padding-left: 0px;
}
</style>

